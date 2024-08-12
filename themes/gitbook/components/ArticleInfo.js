export default function ArticleInfo({ post }) {
  if (!post) {
    return null
  }
  return <div className="pt-10 pb-6 text-gray-400 text-sm border-b">
        <i className="fa-regular fa-clock mr-1" />
        最后更新日期:  { post.date?.start_date}
    </div>
}
