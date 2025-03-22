'use client'
import { HeaderTab } from '@/src/components/ui/HeaderTab'
import React from 'react'
import { Filter } from './Filter'
import { Products } from './Products'
import { Button } from '@/src/components/ui/button'
import { BsThreeDots } from "react-icons/bs";
import { IconButton } from '@/src/components/ui/icon-button'
import { SearchBar } from '@/src/components/ui/search-bar'
import { Divider } from '@/src/components/ui/divider'
import { ProductView } from './productView'
import { PageLayout } from '@/src/components/ui/pageLayout'
import { useAppContext } from '@/src/context'
import { ProductForm } from './product-form'
import { Heading } from '@/src/components/ui/Heading'

const page = () => {

    const { productFormShow, setProductFormShow } = useAppContext()

    return (
        <div>
            <HeaderTab heading='Products' context={
                <div className="border border-neutral-300 rounded-md text-xs p-1 px-2 flex gap-1">
                    <strong>1708</strong>
                    <span className='text-neutral-500'>total products</span>
                </div>}>
                <SearchBar />
                <ProductView />
                <div className="h-full flex gap-2 relatie">
                    <Divider />
                    <IconButton icon={<BsThreeDots />} onClick={() => { }} />
                    <Button title='add product' onClick={() => setProductFormShow(true)} />
                </div>
            </HeaderTab >
            <PageLayout>
                <Filter />
                <Products />
            </PageLayout>
            {productFormShow && <ProductForm />}
        </div >
    )
}

export default page