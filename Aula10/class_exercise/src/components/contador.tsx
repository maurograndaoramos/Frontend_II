'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function Contador() {
    const count = useSelector((state: RootState) => state.counter.value);
    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
}