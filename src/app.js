// Array para armazenar os livros
let books = [];

// Função para renderizar a lista de livros
function renderBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${book.title}</strong> por ${book.author}, ${book.pages} páginas (Editora: ${book.publisher})
            <button onclick="editBook(${index})">Editar</button>
            <button onclick="deleteBook(${index})">Excluir</button>
        `;
        bookList.appendChild(li);
    });
}

// Função para adicionar um novo livro
function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const publisher = document.getElementById('publisher').value;

    if (title && author && pages && publisher) {
        books.push({ title, author, pages, publisher });
        renderBooks();

        // Limpar os campos após adicionar
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('pages').value = '';
        document.getElementById('publisher').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Função para editar um livro existente
function editBook(index) {
    const book = books[index];
    document.getElementById('title').value = book.title;
    document.getElementById('author').value = book.author;
    document.getElementById('pages').value = book.pages;
    document.getElementById('publisher').value = book.publisher;

    // Remover o livro da lista para substituição
    books.splice(index, 1);
    renderBooks();
}

// Função para excluir um livro
function deleteBook(index) {
    books.splice(index, 1);
    renderBooks();
}

// Evento para o botão de adicionar livro
document.getElementById('add-book').addEventListener('click', addBook);

// Renderizar a lista inicial (vazia)
renderBooks();

