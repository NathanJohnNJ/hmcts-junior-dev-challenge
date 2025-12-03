
export async function getAllTasks(){
  try{
    const result = await fetch(import.meta.env.VITE_API_URL, {
      method: "GET",
    })
    console.log(result.json());
    return await result.json();
  } catch(error){
    console.log(error);
  }
}

export async function createTask(title, description, status, dueDate){
  const tasks = await getAllTasks();
  let id;
  if(!tasks){
    id = 0;
  } else {
    id = tasks.length;
  }
  try{
    const result = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      body: JSON.stringify({
        "id": id,
        "title": title,
        "description": description,
        "dueDate": dueDate,
        "status": status
        })
      }
    )
    return await result.json();
  } catch(error){
    console.log(error);
  }
}