
export async function getAllTasks(){
  const result = await fetch(VITE_API_SERVER, {
    method: "GET",
  })
  return await result.json();
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
  const result = await fetch(VITE_API_SERVER, {
    method: "POST",
    body: JSON.stringify({
      "id": id,
      "title": title,
      "description": description,
      "dueDate": dueDate,
      "status": status
    })
  })
  return await result.json();
} catch(error){
  console.log(error);
}
}