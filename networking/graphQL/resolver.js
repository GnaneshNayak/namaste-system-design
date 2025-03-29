const data = {
  authors: [
    {
      id: 1,
      name: 'gnanesh',
      bookId: [100, 104],
    },

    {
      id: 2,
      name: 'bilva',
      bookId: [102],
    },
  ],

  books: [
    { id: 100, title: 'front end developer', publishedYear: 2022, authorId: 1 },
    { id: 102, title: 'front ', publishedYear: 2022, authorId: 2 },
    { id: 3, title: ' end developer', publishedYear: 2022, authorId: 3 },
    { id: 104, title: 'sddsdds ', publishedYear: 2022, authorId: 1 },
  ],
};

export const resolver = {
  Author: {
    books: (parent, args, context, info) => {
      return data.books.filter((a) => parent.bookId.includes(a.id));
    },
  },
  Book: {
    author: (parent, args, context, info) => {
      return data.authors.find((a) => parent.authorId === a.id);
    },
  },
  Query: {
    authors: () => {
      return data.authors;
    },
    books: () => {
      return data.books;
    },
  },
  Mutation: {
    addBook: (parent, args, context, info) => {
      console.log(args);
      const newRecord = { id: data.books.length + 1, ...args };
      data.books.push(newRecord);
      return newRecord;
    },
    updateBook: (parent, args, context, info) => {
      console.log(args);
      const newRecord = data.books.findIndex((b) => b.id === parseInt(args.id));
      console.log(newRecord);
      data.books[newRecord].title = args.title;
      return data.books[newRecord];
    },
  },
};
