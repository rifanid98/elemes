export interface CourseEntityInterface {
  id?: number;
  name?: string;
  category?: string;
  description?: string;
  rating?: number;
  bought?: number;
  price?: number;
  image?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export class Course implements CourseEntityInterface {
  id?: number;
  name?: string;
  category?: string;
  description?: string;
  rating?: number;
  bought?: number;
  price?: number;
  image?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
