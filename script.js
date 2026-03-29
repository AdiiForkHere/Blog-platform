let posts = [];
let editIndex = -1;

function addPost() {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    if (title === "" || content === "") {
        alert("Please fill all fields");
        return;
    }

    if (editIndex === -1) {
        posts.push({ title, content });
    } else {
        posts[editIndex] = { title, content };
        editIndex = -1;
    }

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    displayPosts();
}

function displayPosts() {
    let postDiv = document.getElementById("posts");
    postDiv.innerHTML = "";

    posts.forEach((post, index) => {
        postDiv.innerHTML += `
            <div class="post">
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                
                <div class="actions">
                    <button class="edit" onclick="editPost(${index})">Edit</button>
                    <button class="delete" onclick="deletePost(${index})">Delete</button>
                </div>
            </div>
        `;
    });
}

function deletePost(index) {
    posts.splice(index, 1);
    displayPosts();
}

function editPost(index) {
    document.getElementById("title").value = posts[index].title;
    document.getElementById("content").value = posts[index].content;
    editIndex = index;
}