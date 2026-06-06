import { promises as fs } from "fs";
import path from "path";

import { createId } from "@/lib/utils";

const submissionsDir = path.join(process.cwd(), "data", "submissions");

async function ensureFile(fileName: string) {
  const fullPath = path.join(submissionsDir, fileName);

  try {
    await fs.access(fullPath);
  } catch {
    await fs.mkdir(submissionsDir, { recursive: true });
    await fs.writeFile(fullPath, "[]", "utf-8");
  }

  return fullPath;
}

export async function appendSubmission<T extends Record<string, unknown>>(
  fileName: string,
  payload: T
) {
  const fullPath = await ensureFile(fileName);
  const raw = await fs.readFile(fullPath, "utf-8");
  const current = JSON.parse(raw) as Array<Record<string, unknown>>;
  const id = createId(fileName.replace(".json", ""));
  const entry = {
    id,
    createdAt: new Date().toISOString(),
    ...payload
  };

  current.push(entry);
  await fs.writeFile(fullPath, JSON.stringify(current, null, 2), "utf-8");

  return id;
}
