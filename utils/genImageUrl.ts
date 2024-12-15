

export const genImageUrl = (collectionId:string, recordId:string, fileName:string) => {
    const config = useRuntimeConfig()

    return `${config.public.apiBase}/api/files/${collectionId}/${recordId}/${fileName}`
}