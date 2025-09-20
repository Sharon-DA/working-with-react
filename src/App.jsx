import React from 'react'
import './App.css'

// Import all components
import ShoppingList from './components/ShoppingList'
import ProductList from './components/ProductList'
import MenuCategories from './components/MenuCategories'
import BookList from './components/BookList'
import AnimalFilter from './components/AnimalFilter'
import StudentGroups from './components/StudentGroups'
import MessageList from './components/MessageList'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React Mapping Techniques Demo</h1>
        <p>Comprehensive showcase of list rendering patterns, conditional styling, and data transformation methods</p>
      </header>
      
      <main className="exercises-container">
        <section className="exercise">
          <h2>Exercise 1: Shopping List</h2>
          <p>Basic list with conditional styling - "Eggs" is struck through to show it's already bought.</p>
          <ShoppingList />
        </section>

        <section className="exercise">
          <h2>Exercise 2: Product List</h2>
          <p>Highlight expensive products - items over $500 are displayed in red.</p>
          <ProductList />
        </section>

        <section className="exercise">
          <h2>Exercise 3: Menu Categories</h2>
          <p>Nested categories with items displayed as headings and lists.</p>
          <MenuCategories />
        </section>

        <section className="exercise">
          <h2>Exercise 4: Book List</h2>
          <p>Numbered list using ordered list (&lt;ol&gt;) with automatic numbering.</p>
          <BookList />
        </section>

        <section className="exercise">
          <h2>Exercise 5: Animal Filter</h2>
          <p>Filter and render only animals that start with the letter "E".</p>
          <AnimalFilter />
        </section>

        <section className="exercise">
          <h2>Exercise 6: Student Groups</h2>
          <p>Group students by grade using reduce() method, then render each group.</p>
          <StudentGroups />
        </section>

        <section className="exercise">
          <h2>Exercise 7: Message List</h2>
          <p>Conditional rendering - display "No new messages" when array is empty.</p>
          <MessageList />
        </section>
      </main>
    </div>
  )
}

export default App
