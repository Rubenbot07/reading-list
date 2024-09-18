export function useStorageListener (synchronize) {
    window.addEventListener('storage', (change) => {
        if(change.key === 'BOOK_LIST') {
            console.log('there was a change')
            synchronize()
        }
    })

}