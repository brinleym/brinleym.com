import { Fragment } from "react"
import { StarIcon } from "@heroicons/react/24/solid"

export interface Review {
  reviewer: string,
  numStars: number,
  review: string
}

export default function Reviews({ reviews }: { reviews: Review[] }) {
  return (
    <ul className="flex flex-col gap-6 justify-start">
      {reviews.map(({ reviewer, numStars, review }: Review, idx: number): React.ReactNode => {
        return (
          <li key={idx} className="flex flex-col gap-1">
            <h3 className="text-2xl">{reviewer}</h3>
            <div className="flex gap-1">
              {new Array(numStars).fill(null).map((_, num: number): React.ReactNode => {
                return (
                  <Fragment key={num}>
                    <StarIcon className="w-5 h-5" />
                  </Fragment>
                )
              })}
            </div>
            <p>{review}</p>
          </li>
        )
      })}
    </ul>
  )
}