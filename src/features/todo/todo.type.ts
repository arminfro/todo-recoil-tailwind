export interface Todo extends TodoCreate {
  id: number;
  completed: boolean;
}

export interface TodoCreate {
  title: string;
  description: string;
}

export type Filter = 'completed' | 'uncompleted' | 'all';
