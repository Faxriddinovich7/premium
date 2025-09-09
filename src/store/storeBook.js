import { defineStore } from 'pinia'

export const useStoreBook = defineStore('books', {
    state: () => ({
        books: [],
    }),

    actions: {
        async fetchBooks() {
            const res = await fetch('https://effective-mobile.duckdns.org/api/ads/')
            const data = await res.json()
            this.books = data.results || data
        },
        async addBook(book) {
            const res = await fetch('https://effective-mobile.duckdns.org/api/ads/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(book),
            })
            const data = await res.json()
            this.books.push(data)
        },
        async updateBook(id, book) {
            const res = await fetch(`https://effective-mobile.duckdns.org/api/ads/${id}/`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(book),
            })
            const data = await res.json()
            const index = this.books.findIndex(b => b.id === id)
            if (index !== -1) this.books[index] = data
        },
        async deleteBook(id) {
            await fetch(`https://effective-mobile.duckdns.org/api/ads/${id}/`, {
                method: 'DELETE',
            })
            this.books = this.books.filter(b => b.id !== id)
        }
    }
})
