import type { RequestHandler } from "@sveltejs/kit";

let todos: Todo[] = [];

export const get: RequestHandler = () => {
    return {
        status: 200,
        body: todos
    }
}

export const post = async ({ params, request }) => {
    const body = await request.formData();
    todos.push({
        creted_at: new Date(),
        text: body.get('text'),
        done: false
    });

    return {
        status: 303,
        headers: {
            location: "/"
        }
    }
}