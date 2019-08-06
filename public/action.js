console.log("loaded")
del=(id)=>{
    $.post("/api/delete",{'id':id}).then((res)=>{
       location.reload()
    })
}