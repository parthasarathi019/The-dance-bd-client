import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

const useClass = () => {

    const {data: classes = [] , isLoading: loading , refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('https://summer-camp-server-zeta.vercel.app/dance_class')
            return res.json()
        }

    })
    return [classes , loading , refetch]
}

export default useClass;