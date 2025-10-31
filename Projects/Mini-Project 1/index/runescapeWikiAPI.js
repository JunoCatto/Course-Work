async function fetchData(name){
    const response = await fetch(`/api?${name}`)

    const result = await response.json()

    await result.forEach((skill) => {
        const skillDiv = document.createElement('div')
        skillDiv.textContent = `${skill.name} ${skill.level}`
        skillDiv.classList.add('skill')
        document.body.appendChild(skillDiv)
    })
}

document.getElementById('button')
    .addEventListener('click', () => {
    fetchData().catch(e => console.error(e))
})



