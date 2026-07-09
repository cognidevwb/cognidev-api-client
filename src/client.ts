export type Todo = { id: string; title: string; done: boolean };

export function createClient(baseUrl: string) {
  const get = async <T>(path: string): Promise<T> => {
    const res = await fetch(`${baseUrl}${path}`);
    if (!res.ok) throw new Error(`GET ${path} → ${res.status}`);
    return res.json() as Promise<T>;
  };
  return {
    listTodos: () => get<Todo[]>("/todos"),
    getTodo: (id: string) => get<Todo>(`/todos/${id}`),
  };
}
