import {Request , Response } from 'express'
import {connect} from '../database'


export async  function getPosts(req:Request , res:Response){
      const con     =  await connect();
      const posts   =  await con.query('SELECT * FROM posts')
     return  res.json(posts[0])
}


export async  function savePost(req:Request , res:Response){
    const newPost = req.body
    const con =  await connect();
                 await con.query('INSERT INTO posts SET ?', [newPost])
   return  res.json({message:'save post'})
}

export async function getPost(req:Request , res:Response){
    const {id} = req.params;
      const conn = await connect()
      const post= await conn.query('SELECT * FROM posts where id = ?', [id])
      return res.json(post[0])
}

export async function deletePost(req:Request, res:Response){
    const {id}= req.params
    const conn = await connect()
    await conn.query('DELETE FROM posts WHERE id=?', [id])
    return res.json({message:'delete posts'})
}

export async function updatePost(req:Request, res:Response){

    const {id}= req.params
    const conn = await connect()
   await conn.query('UPDATE posts set ? WHERE id=?',[req.body, id])
   return  res.json({message:'update'})
}

