import { ProductCard } from './ProductCard';
import { ProductStrip } from './ProductStrip';
import { useAppContext } from '@/src/context';
import React from 'react'

export const Products = () => {
    const { view } = useAppContext();

    return (
        <div className='relative w-[73%] float-right pb-24'>
            {
                view === 'list' ?
                    <div className="w-full flex flex-col gap-2">
                        {Array.from({ length: 10 }).map((_, idx: number) => (
                            <ProductStrip key={idx} />
                        ))}
                    </div> : view === 'grid' ? <div className="w-full grid grid-cols-3 gap-2">
                        {Array.from({ length: 10 }).map((_, idx: number) => (
                            <ProductCard key={idx} />
                        ))}
                    </div> : null
            }
        </div>
    )
}
