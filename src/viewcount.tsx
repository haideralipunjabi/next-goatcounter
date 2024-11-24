"use client"
import { useEffect, useState } from 'react';
import { getViewCount } from './functions';
export function ViewCountBase({ path }: { path?: string }): JSX.Element {
    const [count, setCount] = useState<number>();
    useEffect(() => {
        getViewCount(path).then(
            count => (
                setCount(count)
            )
        )
    }, [])
    if (count) return <>{count.toLocaleString()}</>
    return <></>
}
