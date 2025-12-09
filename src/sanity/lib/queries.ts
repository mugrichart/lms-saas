
import { defineQuery } from "next-sanity";

// GROQ query
export const FEATURED_COURSES_QUERY = defineQuery(`*[
        _type == "course"
        && featured == true
    ] | order(_createdAt desc)[0...6] {
        _id,
        title,
        slug,
        description,
        tier,
        featured,
        thumbnail {
            asset -> {
                _id,
                url
            }
        },
        "moduleCount": count(modules),
        "lessonCount": count(modules[] -> lessons[])
    }`)

export const STATS_QUERY = defineQuery(`{
        "courseCount": count(*[_type == "course"]),
        "lessonCount": count(*[_type == "lesson"])
    }`)