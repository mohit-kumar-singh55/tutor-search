/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { AiOutlineDown } from 'react-icons/ai'

const people = [
  {
    id: 1,
    name: 'India',
    avatar:
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png',
  },
  {
    id: 2,
    name: 'America',
    avatar:
      'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
  },
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SelectWithIcons() {
  const [selected, setSelected] = useState(people[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
         
          <div className="mt-1 relative">
            <Listbox.Button className="relative w-full rounded-[10px] border-2 border-[#C1C1C1] px-3 py-2">
              <span className="flex items-center">
                <img src={selected.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="ml-1 absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none">
                <AiOutlineDown className=" font-black h-3" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img src={person.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
