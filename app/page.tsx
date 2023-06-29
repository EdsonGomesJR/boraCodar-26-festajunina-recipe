'use client'
import Image from 'next/image'

import pamonha from '@/public/images/pamonha.svg'
import cake from '@/public/icons/cake.svg'
import minusrounded from '@/public/icons/minusrounded.svg'
import plusrounded from '@/public/icons/plusrounded.svg'
import panela from '@/public/icons/panela.svg'
import { useState } from 'react'
export default function Home() {
  const [count, setCount] = useState(1)
  function handlePlus() {
    setCount((value) => value + 1)
  }
  function handleMinus() {
    if (count <= 1) {
      return
    }
    setCount((value) => value - 1)
  }
  return (
    <div className="grid h-[900px] w-[1400px] grid-rows-2">
      <div className="grid  place-items-center justify-items-center  bg-[#FEECE0]   ">
        <div className="flex items-center justify-center gap-14 ">
          <Image src={pamonha} alt="Pamonha" />
          <div className="flex flex-col items-start gap-[1.875rem] text-[#58190A]">
            <h1 className="text-[4.5rem] font-bold leading-none">Pamonha</h1>
            <p className="font text-[2.375rem] leading-none">
              Prato típico com milho verde ralado
            </p>
            <div className=" flex items-center gap-2 text-[2.1875rem] leading-none text-[#9B6647]">
              <p>Porções</p>
              <Image
                src={minusrounded}
                alt="minusButton"
                className={`${count <= 1 && 'cursor-not-allowed opacity-50'}`}
                onClick={handleMinus}
              />
              <span>{count}</span>
              <Image
                src={plusrounded}
                alt="plusButton"
                onClick={handlePlus}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid place-items-start justify-items-center bg-[#9B6647] px-[3.125rem] py-[4.625rem] text-[1.75rem] leading-normal  text-[#FEECE0]">
        <div className="grid grid-flow-col  gap-16  ">
          <div>
            <div className="flex flex-col items-start gap-8  ">
              <div className="flex items-center justify-center gap-2 ">
                <Image
                  src={cake}
                  className="mb-1 h-8 w-[2.231rem]"
                  alt="cakeimage"
                />{' '}
                <h2 className="text-[2.375rem] font-bold ">Ingredientes</h2>
              </div>
              <ul className="list-inside list-disc">
                <li>
                  <span className="relative -left-3">
                    {count} espiga de milho verde
                  </span>
                </li>
                <li>
                  <span className="relative -left-3">
                    {count} colher de sopa de açúcar
                  </span>
                </li>
                <li>
                  <span className="relative -left-3">
                    {count} colher de sopa de manteiga
                  </span>
                </li>
                <li>
                  <span className="relative -left-3">Sal a gosto</span>
                </li>
                <li>
                  <span className="relative -left-3">
                    Palha de milho (para embrulhar)
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-start justify-center gap-8 ">
              <div className="flex items-center justify-center gap-2">
                <Image src={panela} alt="panelaIcon" className="mb-1" />{' '}
                <h2 className="text-[2.375rem] font-bold">Modo de preparo</h2>
              </div>
              <ul className="list-inside list-decimal">
                <li>Descasque a espiga de milho e corte os grãos.</li>
                <li>Bata o milho, açúcar, manteiga e sal no liquidificador.</li>
                <li>Coloque a massa nas palhas de milho e feche bem.</li>
                <li>Cozinhe em água fervente por cerca de 40 minutos.</li>
                <li>Deixe esfriar e sirva.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
