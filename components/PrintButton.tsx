"use client"

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded bg-cyan-400 px-5 py-2.5 font-semibold text-black"
    >
      Save as PDF
    </button>
  )
}
