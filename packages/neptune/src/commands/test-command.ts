import { Command } from '@/core'
import type { CommandArgs } from '@/types'

export class TestCommand extends Command {
	name = 'foo'

	description = 'May the foo be with you.'

	options = {
		'--help': Boolean,
		'--bar': String,
		'-h': '--help',
		'-b': '--bar',
	}

	help = 'Uh oh! No help for you! 😝'

	async run(args: CommandArgs) {
		if (args['--help']) {
			this.displayHelp()
			return
		}

		const bar = args['--bar']

		console.log(bar)
	}
}
