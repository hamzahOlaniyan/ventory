'use client'
import { HeaderTab } from '@/components/ui/HeaderTab'
import React from 'react'
import { Filter } from './Filter'
import { Products } from './Products'
import { Button } from '@/components/ui/button'
import { BsThreeDots } from "react-icons/bs";
import { IconButton } from '@/components/ui/icon-button'
import { SearchBar } from '@/components/ui/search-bar'
import { Divider } from '@/components/ui/divider'
import { ProductView } from '@/components/ui/productView'
import { PageLayout } from '@/components/ui/pageLayout'
import { useAppContext } from '@/context'

const page = () => {

    const { productFormShow, setProductFormShow } = useAppContext()

    return (
        <div>
            <HeaderTab heading='dashboard'>
                <SearchBar />
                <ProductView />
                <div className="h-full flex gap-2 relatie">
                    <Divider />
                    <IconButton icon={<BsThreeDots />} onClick={() => { }} />
                    <Button title='add product' onClick={() => setProductFormShow(true)} />
                </div>
            </HeaderTab >
            <PageLayout>
                <div className="grid grid-cols-[0.8fr_2fr] gap-4">
                    <Filter />
                    <Products />
                </div>
            </PageLayout>
        </div >
    )
}

export default page