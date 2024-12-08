import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import fs from "fs";
import matter from 'gray-matter';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

const dirContent = fs.readdirSync("content", "utf-8")

const blogs = dirContent.map(file =>{
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8")
  const{data}= matter(fileContent)
  return data
})

// const blogs = [
//   {
//     title: 'First Blog',
//     description: 'This is the description for the first blog.',
//     slug: 'first-blog',
//     date: '2023-10-01',
//     author: 'Author One',
//     image: '/a.jpg',

//   },
//   {
//     title: 'Second Blog',
//     description: 'This is the description for the second blog.',
//     slug: 'second-blog',
//     date: '2023-10-02',
//     author: 'Author Two',
//     image: '/b.jpg',
//   },
//   {
//     title: 'Third Blog',
//     description: 'This is the description for the third blog.',
//     slug: 'third-blog',
//     date: '2023-10-03',
//     author: 'Author Three',
//     image: '/c.jpg',
//   },
// ];

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold mb-8 text-center">Blog Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="rounded-lg shadow-lg overflow-hidden dark:border-2 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <Image src={blog.image} alt={blog.title} width={400} height={250} className="w-full h-64 object-cover" />

            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
              <p className="mb-4">{blog.description}</p>
              <div className="text-sm mb-4">
                <span>By {blog.author}</span> | <span>{new Date(blog.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
              </div>
              <a href={`/blogpost/${blog.slug}`} className="text-blue-500 hover:underline">
                <Button variant="outline">Click here</Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;