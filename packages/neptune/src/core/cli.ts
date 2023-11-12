import arg from 'arg'

import { Command } from '@/core'

// TODO dynamically import all commands
const commands: Record<string, new () => Command> = {}
