export interface Project42 {
  slug: string
  name: string
  tags: string[]
  github?: string
}

export const PROJECTS_42: Project42[] = [
  { slug: 'libft', name: 'libft', tags: ['C', 'Libc'], github: 'https://github.com/ahetru/libft' },
  { slug: 'ft_printf', name: 'ft_printf', tags: ['C', 'Variadic'], github: 'https://github.com/ahetru/ft_printf' },
  { slug: 'get_next_line', name: 'get_next_line', tags: ['C', 'Buffers'], github: 'https://github.com/ahetru/get_next_line' },
  { slug: 'born_to_be_root', name: 'born_to_be_root', tags: ['Linux', 'Admin'] },
  { slug: 'push_swap', name: 'push_swap', tags: ['C', 'Algorithmes'], github: 'https://github.com/ahetru/push_swap' },
  { slug: 'fractol', name: 'fractol', tags: ['C', 'Graphisme'], github: 'https://github.com/ahetru/fractol' },
  { slug: 'pipex', name: 'pipex', tags: ['C', 'Unix', 'Pipes'], github: 'https://github.com/ahetru/pipex' },
  { slug: 'philosophers', name: 'philosophers', tags: ['C', 'POSIX', 'Threads'], github: 'https://github.com/ahetru/philosophers' },
  { slug: 'minishell', name: 'minishell', tags: ['C', 'Shell', 'Unix'], github: 'https://github.com/ahetru/minishell' },
  { slug: 'cub3d', name: 'cub3d', tags: ['C', 'Raycasting'], github: 'https://github.com/ahetru/cub3d' },
  { slug: 'cppmodules', name: 'cppmodules', tags: ['C++', 'OOP'], github: 'https://github.com/ahetru/cppmodules' },
  { slug: 'ft_irc', name: 'ft_irc', tags: ['C++', 'Sockets', 'IRC'], github: 'https://github.com/ahetru/ft_irc' },
  { slug: 'ft_transcendence', name: 'ft_transcendence', tags: ['NestJS', 'JavaScript', 'Docker', 'WebSocket'], github: 'https://github.com/edouardproust/transcendence' },
]
