'use client'

import useConversation from "@/app/hooks/useConversation"
import axios from "axios"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { HiPhoto } from "react-icons/hi2"
import MessageInput from "./MessageInput"
import { HiPaperAirplane } from "react-icons/hi2"
import { CldUploadButton } from "next-cloudinary"

const Form = () => {

const { conversationId } = useConversation()

const {register, handleSubmit, setValue, formState: {errors}} = useForm<FieldValues>({
    defaultValues: {
        message: ''
    }
})

const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue('message', '', { shouldValidate: true })
    axios.post('/api/messages', {
        ...data, 
        conversationId
    })
}

const handleUpload = (result: any) => {
    axios.post('/api/messages', {image: result?.info?.secure_url, conversationId})
}

  return (
    <div className="py-4 px-4 bg-white border-t flex items-center gap-2 lg:gap-4 w-full">
        <CldUploadButton
         options={{maxFiles: 1}}
         onUpload={handleUpload}
         uploadPreset="mk6dswoi">
       <HiPhoto size={30} className="text-[#25D366]"/>
       </CldUploadButton>
       <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2 lg:gap-4 w-full">
          <MessageInput id='message' register={register} errors={errors} required placeholder='Aa'/>
          <button type="submit"
          className="rounded-full p-2 bg-[#25D366] cursor-pointer transition hover:bg-[#11d157]">
           <HiPaperAirplane size={18} className="text-white"/>
          </button>
       </form>
    </div>
  )
}

export default Form