import React from 'react'
import { Link } from 'react-router-dom';
import Blockquote from '../blockquote/blockquote';

export default function Footer() {
    return (
        <>
        <Blockquote/>
    <div className='mt-4'>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="../../../imgs/avz_bg.png" alt=""></img>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="../../../imgs/1.jpeg" alt=""></img>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="h../../../imgs/2.jpeg" alt=""></img>
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                <img class="h-auto max-w-full rounded-lg" src="h../../../imgs/3.jpeg" alt=""></img>
                </div>
                <div>
                <img class="h-auto max-w-full rounded-lg" src="h../../../imgs/4.jpeg" alt=""></img>
                </div>
                <div>
                <img class="h-auto max-w-full rounded-lg" src="h../../../imgs/5.jpeg" alt=""></img>
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                <img class="h-auto max-w-full rounded-lg" src="h../../../imgs/6.jpeg" alt=""></img>
                </div>
                <div>
                <img class="h-auto max-w-full rounded-lg" src="h../../../imgs/7.jpeg" alt=""></img>
                </div>
                <div>
                <img class="h-auto max-w-full rounded-lg" src="h../../../imgs/8.jpeg" alt=""></img>
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                <img class="h-auto max-w-full rounded-lg" src="h../../../imgs/9.jpeg" alt=""></img>
                </div>
                <div>
                <img class="h-auto max-w-full rounded-lg" src="h../../../imgs/10.jpeg" alt=""></img>
                </div>
                <div>
                <img class="h-auto max-w-full rounded-lg" src="h../../../imgs/1.jpeg" alt=""></img>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}