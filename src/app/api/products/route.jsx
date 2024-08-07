import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import dbConnect from '../../../../lib/mongodb.mjs';

export async function GET(request) {
  try {
    console.log('Attempting to connect to MongoDB...');
    await dbConnect();
    
    // Prueba simple de conexión
    await mongoose.connection.db.admin().ping();
    console.log('Successfully connected to MongoDB');

    return NextResponse.json({ message: 'Connected to MongoDB successfully' });
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    return NextResponse.json({ error: 'Failed to connect to MongoDB' }, { status: 500 });
  }
}