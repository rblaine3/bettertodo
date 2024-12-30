import { Collection, Db, ObjectId, WithId } from 'mongodb';
import { connectToDatabase } from '../mongodb';

export interface BaseDocument {
  _id?: ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

export class BaseDAO<T extends BaseDocument> {
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
    return collection.findOne({ _id } as any) as Promise<T | null>;
  }

  async findOne(query: Partial<T>): Promise<T | null> {
    const collection = await this.getCollection();
    return collection.findOne(query as any) as Promise<T | null>;
  }

  async find(query: Partial<T>, options?: { limit?: number; skip?: number }): Promise<T[]> {
    const collection = await this.getCollection();
    return collection
      .find(query as any)
      .skip(options?.skip || 0)
      .limit(options?.limit || 0)
      .toArray() as Promise<T[]>;
  }

  async create(data: Omit<T, '_id' | 'createdAt' | 'updatedAt'>): Promise<T> {
    const collection = await this.getCollection();
    const now = new Date();
    const documentToInsert = {
      ...data,
      createdAt: now,
      updatedAt: now,
    };

    const result = await collection.insertOne(documentToInsert as any);
    return { ...documentToInsert, _id: result.insertedId } as T;
  }

  async update(id: string | ObjectId, data: Partial<T>): Promise<T | null> {
    const collection = await this.getCollection();
    const _id = typeof id === 'string' ? new ObjectId(id) : id;
    
    const updateData = {
      ...data,
      updatedAt: new Date(),
    };

    const result = await collection.findOneAndUpdate(
      { _id } as any,
      { $set: updateData },
      { returnDocument: 'after' }
    );

    return result as unknown as T;
  }

  async delete(id: string | ObjectId): Promise<boolean> {
    const collection = await this.getCollection();
    const _id = typeof id === 'string' ? new ObjectId(id) : id;
    const result = await collection.deleteOne({ _id } as any);
    return result.deletedCount === 1;
  }
}
