'use client'
import { NumberInput } from '@/src/components/ui/numberInput';
import { Select } from '@/src/components/ui/Select'
import React, { useState } from 'react'
import { TbCaretUpDownFilled } from "react-icons/tb";
import { RiResetLeftFill } from "react-icons/ri";

const sort = ['a-z', 'z-a', 'prize asc', 'price desc']
const stockAlert = ['all stock', 'test', 'testing']
const category = ['all product', 'men', 'women', 'children']




export const Filter = () => {

    const [minValue, setMinValue] = useState(10);
    const [maxValue, setMaxValue] = useState(90);

    const Heading = ({ title }: { title: string }) => (
        <h1 className='uppercase text-xxs font-semibold text-neutral-500 py-1'>{title}</h1>
    )

    const Tag = ({ number, active }: { number: number, active: boolean | undefined }) => (
        <p className={`${active ? 'bg-theme-900/20 text-theme-900' : 'bg-neutral-200'} text-xs font-semibold p-1 px-2 rounded-sm`}>{number}</p>
    )

    const active = true

    const FilterSection = ({ children }: { children: React.ReactNode }) => (
        <div className="mb-2">{children}</div>
    )

    const SelectButton = ({ title, active, tag }: { title: string, active?: boolean, tag?: React.ReactNode }) => (
        <button type='button' className={`w-full h-9 z-50 flex items-center rounded-md bg-offwhite p-3 outline outline-1 -outline-offset-1 outline-hairline_dark ${active && 'outline-2 outline-theme-900'} justify-between`}>
            <p className="font-semibold text-sm capitalize">{title}</p>
            {Tag && <Tag number={1708} active={active} />}
        </button>
    )


    return (
        <div className='h-fit float-left fixed w-[22%] rounded-lg shadow-sm shadow-neutral-400  bg-white'>
            <form className="">
                <div className="w-full h-full p-4">
                    <FilterSection>
                        <Heading title='product status' />
                        <div className="grid grid-cols-2 gap-2">
                            <SelectButton title='all' active />
                            <SelectButton title='active' />
                            <SelectButton title='all' active />
                            <SelectButton title='active' />
                        </div>
                    </FilterSection>
                    <FilterSection>
                        <Heading title='product type' />
                        <div className="flex gap-2">
                            <SelectButton title='all' active />
                            <SelectButton title='active' />
                        </div>
                    </FilterSection>
                    <FilterSection>
                        <Heading title='sort by' />
                        <Select items={sort} icon={<TbCaretUpDownFilled />} placeholder='ALPHABETICAL' />
                    </FilterSection>
                    <FilterSection>
                        <Heading title='stock alert' />
                        <Select items={stockAlert} icon={<TbCaretUpDownFilled />} placeholder='ALPHABETICAL' />
                    </FilterSection>
                    <FilterSection>
                        <Heading title='category' />
                        <Select items={category} icon={<TbCaretUpDownFilled />} placeholder='ALPHABETICAL' />
                    </FilterSection>
                    <FilterSection>
                        <Heading title='price' />
                        <div className="space-y-2">
                            <NumberInput placeholder='Minimum price' />
                            <NumberInput placeholder='Maximum price' />
                        </div>
                    </FilterSection>
                </div>
                <div className="p-4 border-t  bottom-0 left-0 right-0 border-neutral-400 bg-neutral-200 z-40">
                    <button className='w-full h-full flex gap-1 items-center justify-center text-center capitalize font-semibold'>
                        <i><RiResetLeftFill /></i>
                        <p>reset filter</p>
                    </button>
                </div>
            </form>
        </div>
    )
}
