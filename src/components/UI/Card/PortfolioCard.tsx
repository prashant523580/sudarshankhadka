import Link from 'next/link'
import React, { Component } from 'react'
import Divider from '../Divider'
interface PropsTypes{
    title?: string,
    description: string,
    icon?: any,
    href?:any
}
export default class PortfolioCard extends Component<PropsTypes> {
  render() {
    return (
        <>
        <div {...this.props} className="p-4 md:w-1/3 rounded-lg flex flex-col shadow-lg m-2 text-center items-center bg-gray-100">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-700 text-white mb-5 flex-shrink-0">
          {this.props.icon ? this.props.icon : "icon"}
        </div>
        <div className="flex-grow flex flex-col justify-center items-center">
          <h2 className="text-green-900 text-lg title-font font-medium mb-1">{this.props.title}</h2>
          <Divider/>
          <p className="leading-relaxed text-base">{this.props.description.slice(0,123)}...</p>
          {
            this.props.href &&
          <Link href={this.props.href}  className="mt-3 text-gray-700 font-bold inline-flex items-center">Dive in
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
          }
        </div>
      </div>
        </>
    )
  }
}
