import {
  Search,
  MoreHorizontal,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from 'lucide-react'

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="font-bold text-2xl">Participantes</h1>
        <div className="px-3 py-1.5 w-72 border border-white/10 rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            className="bg-transparent flex-1 outline-none border-0 p-0 text-sm ring-0"
            placeholder="Buscar participante..."
          />
        </div>
      </div>

      <div className="border border-white/10 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th
                className="px-3 py-4 text-sm font-semibold text-left"
                style={{ width: 48 }}
              >
                <input
                  type="checkbox"
                  className="size-4 bg-black/20 rounded border border-white/10 focus-visible:outline-none checked:text-orange-400 focus:ring-0 focus:ring-offset-0"
                />
              </th>
              <th className="px-3 py-4 text-sm font-semibold text-left">
                Código
              </th>
              <th className="px-3 py-4 text-sm font-semibold text-left">
                Participante
              </th>
              <th className="px-3 py-4 text-sm font-semibold text-left">
                Data de inscrição
              </th>
              <th className="px-3 py-4 text-sm font-semibold text-left">
                Data de check-in
              </th>
              <th
                className="px-3 py-4 text-sm font-semibold text-left"
                style={{ width: 64 }}
              ></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 4 }).map((_, i) => {
              return (
                <tr
                  className="border-b border-white/10 hover:bg-white/5 "
                  key={i}
                >
                  <td className="px-3 py-4 text-sm text-zinc-300">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="size-4 bg-black/20 rounded border border-white/10 focus-visible:outline-none checked:text-orange-400 focus:ring-0 focus:ring-offset-0"
                    />
                  </td>
                  <td className="px-3 py-4 text-sm text-zinc-300">12345</td>
                  <td className="px-3 py-4 text-sm text-zinc-300">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">
                        Bruno S Velho
                      </span>
                      <span>bruno.velho@gmail.com</span>
                    </div>
                  </td>
                  <td className="px-3 py-4 text-sm text-zinc-300">
                    7 dias a atrás
                  </td>
                  <td className="px-3 py-4 text-sm text-zinc-300">
                    3 dias a atrás
                  </td>
                  <td className="px-3 py-4 text-sm text-zinc-300">
                    <button className="bg-black/10 border border-white/10 rounded-md p-1.5">
                      <MoreHorizontal className="size-4" />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className="px-3 py-4 text-sm text-zinc-300">
                Mostrando 10 de 228 itens
              </td>
              <td
                colSpan={3}
                className="px-3 py-4 text-sm text-zinc-300 text-right"
              >
                <div className="inline-flex items-center gap-8">
                  Página de 1 de 23
                  <div className="flex gap-1.5">
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronsLeft className="size-4" />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronLeft className="size-4" />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronRight className="size-4" />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronsRight className="size-4" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
