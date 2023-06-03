import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

interface MyObject {
  caption: string;
  // Other properties of your object
}

function readJsonFile(filePath: string): MyObject[] {
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return jsonData.split('\n').map((line) => {
    try {
      return JSON.parse(line) as MyObject;
    } catch (error) {
      console.log(error);
      return null;
    }
  }).filter((obj) => obj !== null) as MyObject[];
}

function findObjectByCaption(array: MyObject[], caption: string): MyObject | null {
  const lowercaseCaption = caption.toLowerCase();
  for (const obj of array) {
    if (typeof obj.caption === 'string' && obj.caption.toLowerCase() === lowercaseCaption) {
      return obj;
    }
  }
  return null;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'entities.ftm.json');
    const { name } = req.query;
    const objects = readJsonFile(filePath);
    const foundObject = findObjectByCaption(objects, String(name));
    if (foundObject) {
      return res.status(200).json(foundObject);
    } else {
      return res.status(200).json({ message: 'Not found' });
    }
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return res.status(500).json({ error: 'Error reading JSON file' });
  }
}