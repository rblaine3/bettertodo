import { Collection, Db, ObjectId } from 'mongodb';
import { connectToDatabase } from '../mongodb';

export class BaseDAO<T> {
  protected collection: string;
  protected db: Db | null = null;

  constructor(collection: string) {
    this.collection = collection;
  }

  protected async getCollection(): Promise<Collection<T>> {
    if (!this.db) {
      this.db = await connectToDatabase();
    }
    return this.db.collection<T>(this.collection);
  }

  async findById(id: string | ObjectId): Promise<T | null> {
    const collection = await this.getCollection();
    const _id = typeof id === 'string' ? new ObjectId(id) : id;
    return collection.findOne({ _id });
  }

  async findOne(query: Partial<T>): Promise<T | null> {
    const collection = await this.getCollection();
    return collection.findOne(query);
  }

  async find(query: Partial<T>, options?: { limit?: number; skip?: number }): Promise<T[]> {
    const collection = await this.getCollection();
    return collection
      .find(query)
      .skip(options?.skip || 0)
      .limit(options?.limit || 0)
      .toArray();
  }

  async create(data: Omit<T, '_id'>): Promise<T> {
    const collection = await this.getCollection();
    const now = new Date();
    const documentToInsert = {
      ...data,
      createdAt: now,
      updatedAt: now,
    } as T;

    const result = await collection.insertOne(documentToInsert as any);
    return { ...documentToInsert, _id: result.insertedId } as T;
  }

  async update(id: string | ObjectId, data: Partial<T>): Promise<T | null> {
    const collection = await this.getCollection();
    const _id = typeof id === 'string' ? new ObjectId(id) : id;
    
    const result = await collection.findOneAndUpdate(
      { _id },
      { 
        $set: { 
          ...data,
          updatedAt: new Date()
        }
      },
      { returnDocument: 'after' }
    );

    return result.value;
  }

  async delete(id: string | ObjectId): Promise<boolean> {
    const collection = await this.getCollection();
    const _id = typeof id === 'string' ? new ObjectId(id) : id;
    const result = await collection.deleteOne({ _id });
    return result.deletedCount === 1;
  }
}
