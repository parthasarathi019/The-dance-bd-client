import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

const useInstructor = () => {

    const {data: instructors = [] , isLoading: loading , refetch } = useQuery({
        queryKey: ['instructor'],
        queryFn: async () => {
            const res = await fetch('https://summer-camp-server-zeta.vercel.app/instructors')
            return res.json()
        }

    })
    return [instructors , loading , refetch]
}

export default useInstructor;