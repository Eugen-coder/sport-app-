import { integer, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const sportsTable = pgTable("sports", {
  id: integer().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  image: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
});

// npx drizzle-kit push
// npx drizzle-kit migrate
// supabase.com / postgres - бесплатная онлайн база

// создаем таблицу/изменения -> generate -> migrate

export const eventsTable = pgTable("events", {
  id: integer().generatedAlwaysAsIdentity(),
  name: varchar({ length: 100 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
});
