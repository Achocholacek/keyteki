const DrawCard = require('../../drawcard.js');

class Censure extends DrawCard {
    setupCardAbilities() {        
        this.interrupt({
            when: {
                onCardAbilityInitiated: event => event.card.type === 'event' && this.controller.opponent && this.controller.imperialFavor !== ''
            },
            canCancel: true,
            handler: context => {
                this.game.addMessage('{0} uses {1} to cancel {2}', this.controller, this, context.event.card);
                context.cancel();
            }
        });
    }
}

Censure.id = 'censure'; // This is a guess at what the id might be - please check it!!!

module.exports = Censure;
