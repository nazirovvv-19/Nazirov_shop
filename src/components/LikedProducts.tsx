import { RootState } from '../store/types'
import React from 'react'
import { useSelector } from 'react-redux'

function LikedProducts({ close }: { close: () => void }) {
  const favouriteProduct = useSelector((state: RootState) => state.like.items || [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 "onClick={()=>close()}>
      <div className="relative bg-white rounded-lg shadow-lg w-[90%] max-w-4xl max-h-[80vh] overflow-y-auto p-6">
        
        <button
          className="absolute top-2 right-4 text-2xl text-gray-600 hover:text-gray-900"
          onClick={close}
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold mb-6">Sevimli mahsulotlar</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {favouriteProduct.length > 0 ? (
            favouriteProduct.map((item) => (
              <div
                key={item.id}
                className="border rounded-md p-4 shadow-sm bg-white"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-[200px] object-contain mb-2"
                />
                <h3 className="text-md font-medium">{item.name}</h3>
                <p className="text-gray-600 text-sm">
                  {Number(item.price).toLocaleString('ru')} so'm
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Hali yurakchani qizartirmagansan.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default LikedProducts
