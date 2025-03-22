'use client'
import React from 'react'
import { BlurBackdrop } from '../../components/ui/blur-backdrop'
import { useAppContext } from '@/src/context'
import { Button } from '../../components/ui/button'
import { Divider } from '../../components/ui/divider'
import { Input } from '../../components/ui/input'

export const ProductForm = () => {

    const { setProductFormShow, productFormShow } = useAppContext()

    return (
        <BlurBackdrop >
            <div className={`${productFormShow ? 'scale-100 opacity-1 ' : 'scale-80 opacity-0'} z-[80] transition-shadow duration-300 w-2/3 h-5/6 bg-white rounded-lg relative overflow-hidden`}>
                <div className="p-4 border-b border-neutral-200">
                    <h1 className='text-md font-semibold capitalize'>add new Product</h1>
                </div>
                <form action="" className="h-full overflow-scroll p-4 pb-32">
                    <div className="">
                        <h1 className='text-lg font-semibold capitalize'>general information</h1>
                    </div>
                    <div className="">
                        <Input title='product name' />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolores eveniet. Eaque dolorem, magni, quasi sapiente enim soluta et sunt totam perspiciatis ab doloribus ducimus voluptatibus, autem quisquam praesentium quas.
                            Culpa nostrum ratione velit, minus consectetur fugiat voluptate et, rem, praesentium voluptates fuga eos? Eligendi saepe eum quas magni esse quaerat officia nulla molestiae, atque aperiam natus ea neque doloremque.
                            Consectetur aliquam dolorem eius, tenetur sunt possimus delectus quos cumque quisquam modi eaque maxime beatae voluptatibus nihil, ducimus sapiente voluptas neque hic. Aliquid perspiciatis voluptate ducimus fugit ipsam magni unde.
                            Suscipit perferendis nostrum explicabo error temporibus tempora repellat, ad atque blanditiis a quis! Sequi perferendis numquam repellendus blanditiis! Modi eius repellendus harum et, delectus magni consequuntur fuga nulla totam excepturi?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolores eveniet. Eaque dolorem, magni, quasi sapiente enim soluta et sunt totam perspiciatis ab doloribus ducimus voluptatibus, autem quisquam praesentium quas.
                            Culpa nostrum ratione velit, minus consectetur fugiat voluptate et, rem, praesentium voluptates fuga eos? Eligendi saepe eum quas magni esse quaerat officia nulla molestiae, atque aperiam natus ea neque doloremque.
                            Consectetur aliquam dolorem eius, tenetur sunt possimus delectus quos cumque quisquam modi eaque maxime beatae voluptatibus nihil, ducimus sapiente voluptas neque hic. Aliquid perspiciatis voluptate ducimus fugit ipsam magni unde.
                            Suscipit perferendis nostrum explicabo error temporibus tempora repellat, ad atque blanditiis a quis! Sequi perferendis numquam repellendus blanditiis! Modi eius repellendus harum et, delectus magni consequuntur fuga nulla totam excepturi?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolores eveniet. Eaque dolorem, magni, quasi sapiente enim soluta et sunt totam perspiciatis ab doloribus ducimus voluptatibus, autem quisquam praesentium quas.
                            Culpa nostrum ratione velit, minus consectetur fugiat voluptate et, rem, praesentium voluptates fuga eos? Eligendi saepe eum quas magni esse quaerat officia nulla molestiae, atque aperiam natus ea neque doloremque.
                            Consectetur aliquam dolorem eius, tenetur sunt possimus delectus quos cumque quisquam modi eaque maxime beatae voluptatibus nihil, ducimus sapiente voluptas neque hic. Aliquid perspiciatis voluptate ducimus fugit ipsam magni unde.
                            Suscipit perferendis nostrum explicabo error temporibus tempora repellat, ad atque blanditiis a quis! Sequi perferendis numquam repellendus blanditiis! Modi eius repellendus harum et, delectus magni consequuntur fuga nulla totam excepturi?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolores eveniet. Eaque dolorem, magni, quasi sapiente enim soluta et sunt totam perspiciatis ab doloribus ducimus voluptatibus, autem quisquam praesentium quas.
                            Culpa nostrum ratione velit, minus consectetur fugiat voluptate et, rem, praesentium voluptates fuga eos? Eligendi saepe eum quas magni esse quaerat officia nulla molestiae, atque aperiam natus ea neque doloremque.
                            Consectetur aliquam dolorem eius, tenetur sunt possimus delectus quos cumque quisquam modi eaque maxime beatae voluptatibus nihil, ducimus sapiente voluptas neque hic. Aliquid perspiciatis voluptate ducimus fugit ipsam magni unde.
                            Suscipit perferendis nostrum explicabo error temporibus tempora repellat, ad atque blanditiis a quis! Sequi perferendis numquam repellendus blanditiis! Modi eius repellendus harum et, delectus magni consequuntur fuga nulla totam excepturi?
                        </p>
                    </div>
                    <div className="absolute left-0 right-0 bottom-0 p-4 border-t bg-white border-neutral-200">
                        <div className="flex justify-end">
                            <div className="flex gap-2">
                                <Button title='cancel' variant='ghost' onClick={() => setProductFormShow(false)} />
                                <Button title='save as draft' variant='outline' />
                                <Divider />
                                <Button title='submit' />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </BlurBackdrop>
    )
}
