import {
  pgTable,
  uuid,
  text,
  integer,
  timestamp,
  customType,
} from "drizzle-orm/pg-core";

const vector = customType<{
  data: number[];
  config: { dimensions: number };
  driverData: string;
}>({
  dataType(config) {
    return `vector(${config?.dimensions ?? 1536})`;
  },
  toDriver(value: number[]) {
    return `[${value.join(",")}]`;
  },
  fromDriver(value: string) {
    return value
      .slice(1, -1)
      .split(",")
      .map(Number);
  },
});

export const curriculumChunks = pgTable("curriculum_chunks", {
  id: uuid("id").primaryKey().defaultRandom(),
  content: text("content").notNull(),
  embedding: vector("embedding", { dimensions: 1536 }),
  course: text("course"),
  grade: text("grade"),
  unit: text("unit"),
  lesson: text("lesson"),
  page: integer("page"),
  sourceFile: text("source_file").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export type CurriculumChunk = typeof curriculumChunks.$inferSelect;
