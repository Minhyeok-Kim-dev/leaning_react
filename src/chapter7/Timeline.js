import React, { Component } from 'react'
import * as d3 from 'd3'
import Canvas from './Canvas'
import TimelineDot from './TimelineDot'

class Timeline extends Component {

  constructor({data=[]}) {
    const times = d3.extent(data.map(d => d.year))
    const range = [50, 450]
    super({data})

    this.scale = d3.time.scale().domain(times).range(range)
    this.state = {data, times, range}
  }

  componentDidMount() {
    let group
    const { data, times, range } = this.state
    const { target } = this.refs

    d3.select(target)
      .append('svg')
      .attr('height', 230)
      .attr('width', 700)

    group = d3.select(target.children[0])
              .selectAll('g')
              .data(data)
              .enter()
              .append('g')
              .attr(
                'transform',
                (d, i) => 'translate(' + this.scale(d.year) + ', 0)'
              )

    group.append('circle')
         .attr('cy', 190)
         .attr('r', 5)
         .style('fill', 'blue')
    
    group.append('text')
         .text(d => d.year + ' - ' + d.event)
         .style('font-size', '9px')
         .attr('y', 130)
         .attr('x', -130)
         .attr('transform', 'rotate(-45)')
  }

  render() {
    const { data } = this.state
    const { scale } = this
    return (
      <div className="timeline">
        <h1>{this.props.name} Timeline</h1>
{/*         
        <Canvas>
          {data.map((d, i) =>
            <TimelineDot position={scale(d.year)}
                         text={`${d.year} - ${d.event}`}
            />
          )}
        </Canvas> */}

        <div ref="target"></div>
      </div>
    )
  }
}

export default Timeline

