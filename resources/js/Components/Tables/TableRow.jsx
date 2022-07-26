import React from 'react'

export default function TableRow({state}) {
  return (
    <>
    <tr key={state.key}>
      <td className='border border-slate-700'>{state.name}</td>
      <td className='border border-slate-700'>{state.abbreviation}</td>
      <td className='border border-slate-700'>{state.established_in}</td>
    </tr>
  </>
  )
}
