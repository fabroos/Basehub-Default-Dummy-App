import Image from "next/image";
import {Pump} from '../../.basehub/react-pump'
import {RichText} from '../../.basehub/react-rich-text'
import { draftMode } from "next/headers";
export default function Home() {
  return (
   <Pump
    draft

   queries={[{
    blog: {
      image: {
        url: true
      },
      description: {
        json: {
          content: true
        }
      },
      title: true
    }
   }]}>
    {async ([{blog}])=>{
      'use server'
      return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <img className="rounded-full" width={100} height={100} src={blog.image?.url} />
      <h1 className="text-5xl font-bold">{blog.title}</h1>
      <RichText>
        {blog.description?.json.content}
      </RichText>

    </main>
      )
    }}
   </Pump>
  );
}
