/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('lightboxBinderIndex', function(Y, NAME) {

/**
 * The lightboxBinderIndex module.
 *
 * @module lightboxBinderIndex
 */

    /**
     * Constructor for the lightboxBinderIndex class.
     *
     * @class lightboxBinderIndex
     * @constructor
     */
    Y.namespace('mojito.binders')[NAME] = {

        /**
         * Binder initialization method, invoked after all binders on the page
         * have been constructed.
         */
        init: function(mojitProxy) {
            var initialData = YUI.namespace('Env.PNM');

            Y.log ('init', 'info', NAME);

            this.mojitProxy = mojitProxy;
            this.config = mojitProxy.config;

            // adding some data into the global PNM register when possible
            if (this.config.place) {
                initialData.place = this.config.place;
            }
        },

        /**
         * The binder method, invoked to allow the mojit to attach DOM event
         * handlers.
         *
         * @param node {Node} The DOM node to which this mojit is attached.
         */
        bind: function(node) {
            var me = this;
            this.node = node;
            Y.log ('bind', 'info', NAME);
        }

    };

}, '0.0.1', {requires: ['mojito-client', 'pnm-lightbox-view', 'pnm-photo']});