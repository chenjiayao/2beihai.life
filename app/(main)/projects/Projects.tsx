import { ProjectCard } from '~/app/(main)/projects/ProjectCard'

export  function Projects() {
  const projects = [
    {
      _id: '1',
      name: 'Time On Web',
      url: 'https://howmuchtimeihavespendonline.com',
      description: 'Time On Web 是一款 Chrome extension，用来记录用户在每个网站的访问时长， 并且支持访问限制、白名单等一系列功能。这款扩展是我第一款独立产品，希望你也喜欢。🥰',
      icon: {
        _ref: 'https://cdn.sanity.io/images/39svnmtd/production/3b446bbe98b3b10f34cfabae65355b23532fc494-600x600.png',
      },
    },
  ]

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <ProjectCard project={project} key={project._id} />
      ))}
    </ul>
  )
}
